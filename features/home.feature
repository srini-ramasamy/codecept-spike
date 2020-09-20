@home
Feature: Home page

  Scenario: Open Google home page
    Given I open "Google" home page
    Then I see "Google" in the title

  Scenario: Open Yahoo home page
    Given I open "Yahoo" home page
    Then I see "Yahoo" in the title