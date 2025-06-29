Feature: Al Jazeera Live Page Tests

  Scenario: Livestream player is visible
    Given I am on the Al Jazeera live page
    Then I should see the livestream player

  Scenario: Switch Player button is visible
    Given I am on the Al Jazeera live page
    Then I should see the Switch Player button
