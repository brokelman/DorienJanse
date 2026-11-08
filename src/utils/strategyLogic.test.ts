import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PAGE_SEO_CONFIG,
  PRACTICE_FACTS,
  TEAM_MEMBERS,
  OFFICIAL_TARIFFS,
  KNOWLEDGE_BLOGS,
  CLIENT_REVIEWS,
  JSON_LD_SCHEMA_STRING,
} from '../data/siteContent';
import {
  validateSeoMetadata,
  recommendTrajectory,
  validateIntakeForm,
  generateStandaloneHtmlPrototype,
} from './strategyLogic';

test('all 6 JouwWeb pages strictly adhere to <= 60 char title, <= 155 char meta description, and no Omega-3 in main SEO tags', () => {
  assert.equal(PAGE_SEO_CONFIG.length, 6);
  const result = validateSeoMetadata(PAGE_SEO_CONFIG);
  assert.equal(result.allValid, true, `SEO violations found: ${result.violations.join('; ')}`);
});

test('factual contact, registration, team, tariff, blog, and room rental data are accurate and free of old phone numbers', () => {
  assert.equal(PRACTICE_FACTS.phone, '06-14184448');
  assert.equal(PRACTICE_FACTS.practiceAgb, '4094632');
  assert.equal(PRACTICE_FACTS.kvk, '64964744');
  assert.equal(PRACTICE_FACTS.dorienBig, '59064209704');
  assert.equal(PRACTICE_FACTS.dorienAgb, '4108710');
  assert.equal(PRACTICE_FACTS.michaelBig, '89920543304');
  assert.equal(TEAM_MEMBERS.length, 2);
  assert.equal(TEAM_MEMBERS[0].name, 'Dorien Janse');
  assert.equal(TEAM_MEMBERS[1].name, 'Michaël Kornmann');
  assert.equal(TEAM_MEMBERS[1].email, 'michael@dorienjanse.nl');
  assert.equal(OFFICIAL_TARIFFS.length, 4);
  assert.equal(KNOWLEDGE_BLOGS.length, 7);
  assert.equal(CLIENT_REVIEWS.length, 4);
  assert.equal(PRACTICE_FACTS.roomRental.spaces.length, 3);
  assert.ok(!JSON_LD_SCHEMA_STRING.includes('24722854'));
  assert.ok(JSON_LD_SCHEMA_STRING.includes('+31614184448'));
});

test('recommendTrajectory prioritizes Vitaliteitstraject (Basis/Lekker/Premium Fit) when systemic fatigue is indicated', () => {
  const rec = recommendTrajectory({
    primaryChallenge: 'pain_chronic',
    duration: 'years',
    systemicSigns: 'fatigue_inflammation',
  });
  assert.equal(rec.recommendedPage, 'vitaliteit');
  assert.ok(rec.title.includes('Vitaliteitstraject'));
  assert.ok(!rec.title.toLowerCase().includes('omega'));
});

test('recommendTrajectory routes endurance athletes to duursport page with Hardloopfysiotherapie pakket', () => {
  const rec = recommendTrajectory({
    primaryChallenge: 'endurance_performance',
    duration: 'months',
    systemicSigns: 'none',
  });
  assert.equal(rec.recommendedPage, 'duursport');
  assert.ok(rec.title.includes('Hardloopfysiotherapie'));
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

  const valid = validateIntakeForm({
    name: 'Sanne van Dijk',
    email: 'sanne@example.nl',
    phone: '06-14184448',
    interest: 'Pakket C – Premium Fit (Vitaliteitstraject)',
    message: 'Ik loop al een half jaar met een achillespeesblessure en verminderd herstel.',
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('generateStandaloneHtmlPrototype produces complete HTML with exact phone 06-14184448 and zero old phone numbers', () => {
  const html = generateStandaloneHtmlPrototype();
  assert.ok(html.includes('<!DOCTYPE html>'));
  assert.ok(html.includes('06-14184448'));
  assert.ok(!html.includes('24 72 28 54'));
  assert.ok(html.includes('Michaël Kornmann'));
  assert.ok(html.includes('64964744'));
});
