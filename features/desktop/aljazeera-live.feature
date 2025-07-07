@desktop @live-page @aljazeera
Feature: Al Jazeera Live Page Tests - Desktop
  As a desktop user
  I want to access the Al Jazeera live streaming page
  So that I can watch live content and use player controls

  @smoke @regression @ui @desktop-view @live-streaming
  Scenario: Livestream player is visible
    Given I am on the Al Jazeera live page
    Then I should see the livestream player

  @smoke @regression @ui @desktop-view @player-controls
  Scenario: Switch Player button is visible
    Given I am on the Al Jazeera live page
    Then I should see the Switch Player button
