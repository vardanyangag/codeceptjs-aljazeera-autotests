@mobile @main-page @aljazeera
Feature: Al Jazeera Main Page Tests - Mobile
  As a mobile user
  I want to access the Al Jazeera main page
  So that I can view content optimized for mobile devices

  @smoke @regression @ui @mobile-view @responsive
  Scenario: Most popular section is not visible on Mobile
    Given I am on the Al Jazeera homepage as mobile
    Then I should not see the Most Popular section
