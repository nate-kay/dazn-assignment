Feature: Check weather by postcode

  Background:
    Given User open Weather Checker application

  Scenario: Search valid existing postcode, check time format
    When User search valid existing postcode
    Then Weather details should be presented to the user
    And Weather details should display Time in correct format

#  Scenario: Search valid existing postcode - check temperature and humidity
#    When User search valid existing postcode
#    Then Weather details should display Temperature and Humidity
#
#  Scenario: Weather properties without value
#    When User search valid existing postcode
#    Then Weather details should not display properties without value
#
  Scenario: Search valid non-existing postcode
    When User search valid non-existing postcode
    Then App should inform the user that it is unanble find the postcode

  Scenario: Search invalid postcode
    When User search invalid postcode
    Then App should inform the user that postcode is invalid

