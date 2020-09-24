@home
Feature: Home page

  Scenario: Open Google home page
    Given I open "Google" home page
    Then I see "Google" in the title

  Scenario: Open DuckDuckGo home page
    Given I open "DuckDuckGo" home page
    Then I see "DuckDuckGo" in the title