import test from 'node:test';
import assert from 'node:assert/strict';
import { PAGE_SEO_CONFIG } from '../data/siteContent';
import {
  validateSeoMetadata,
  recommendTrajectory,
  validateIntakeForm,
  generateStandaloneHtmlPrototype,
} from './strategyLogic';

test('all 6 JouwWeb pages strictly adhere to <= 60 char title and <= 155 char meta description limits', () => {
  assert.equal(PAGE_SEO_CONFIG.length, 6);
  const result = validateSeoMetadata(PAGE_SEO_CONFIG);
  assert.equal(result.allValid, true, `SEO violations found: ${result.violations.join('; ')}`);
});

test('recommendTrajectory prioritizes Kroonjuweel Vitaliteitstraject when systemic fatigue or cellular inflammation is indicated', () => {
  const rec = recommendTrajectory({
    primaryChallenge: 'pain_chronic',
    duration: 'years',
    systemicSigns: 'fatigue_inflammation',
  });
  assert.equal(rec.recommendedPage, 'vitaliteit');
  assert.equal(rec.includesOmegaCheck, true);
});

test('recommendTrajectory routes endurance athletes to duursport page', () => {
  const rec = recommendTrajectory({
    primaryChallenge: 'endurance_performance',
    duration: 'months',
    systemicSigns: 'none',
  });
  assert.equal(rec.recommendedPage, 'duursport');
});

test('validateIntakeForm rejects empty fields and accepts valid Dutch contact details', () => {
  const invalid = validateIntakeForm({
    name: '',
    email: 'not-an-email',
    phone: '123',
    interest: '',
    message: 'kort',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);

  const valid = validateIntakeForm({
    name: 'Sanne van Dijk',
    email: 'sanne@example.nl',
    phone: '06 24722854',
    interest: 'Vitaliteitstraject & Omega-3 Check',
    message: 'Ik loop al een half jaar met een achillespeesblessure en lage energie.',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateStandaloneHtmlPrototype produces complete HTML with Tailwind CDN and Schema.org JSON-LD', () => {
  const html = generateStandaloneHtmlPrototype();
  assert.ok(html.includes('<!DOCTYPE html>'));
  assert.ok(html.includes('https://cdn.tailwindcss.com'));
  assert.ok(html.includes('application/ld+json'));
  assert.ok(html.includes('Ruimtesonde 7'));
});
