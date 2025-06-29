Feature: Al Jazeera Main Page Tests

  Scenario: Most popular section is visible on Desktop
    Given I am on the Al Jazeera homepage as desktop
    Then I should see the Most Popular section

  Scenario: Most popular section contains 10 posts on Desktop
    Given I am on the Al Jazeera homepage as desktop
    Then I should see 10 articles in the Most Popular section

  Scenario: Most popular section is not visible on Mobile
    Given I am on the Al Jazeera homepage as mobile
    Then I should not see the Most Popular section

  Scenario: Bypass block menu item for Most Read is working
    Given I am on the Al Jazeera homepage as desktop
    When I use keyboard to access Bypass Blocks
    Then I should be navigated to the Most Read section
