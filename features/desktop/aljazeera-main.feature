@desktop @main-page @aljazeera
Feature: Al Jazeera Main Page Tests - Desktop
  As a desktop user
  I want to access the Al Jazeera main page
  So that I can view content and use accessibility features

  @smoke @regression @ui @desktop-view
  Scenario: Most popular section is visible on Desktop
    Given I am on the Al Jazeera homepage as desktop
    Then I should see the Most Popular section

  @smoke @regression @ui @content @desktop-view
  Scenario: Most popular section contains 10 posts on Desktop
    Given I am on the Al Jazeera homepage as desktop
    Then I should see 10 articles in the Most Popular section

  @accessibility @keyboard @desktop-view @critical
  Scenario: Bypass block menu item for Most Read is working
    Given I am on the Al Jazeera homepage as desktop
    When I use keyboard to access Bypass Blocks
    Then I should be navigated to the Most Read section 