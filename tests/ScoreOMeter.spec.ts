import { test, expect } from '@playwright/test';

test('ScoreOMeter visual test', async ({ page }) => {
  await page.goto('http://localhost:5000/');

  const testElement = await page.$('#test')
  const currentSnapshot = await testElement.screenshot({ path: 'tests/debug/ScoreOMeter.png' })

  expect(currentSnapshot).toMatchSnapshot('ScoreOMeter--reference.png');
});