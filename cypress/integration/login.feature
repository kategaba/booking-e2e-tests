Feature: Login

    Scenario: As a User I can login with valid credentials
        Given I login with correct credentials

    Scenario Outline: As a User I can search and book a hotel
        Given I select the hotel in '<city>' and dates
        #Then I change the selected dates - not complete
        #And I book the hotel with new changes - not complete
        Examples:
            | city      |
            | Warsaw    |
            | Paris     |
            | Amsterdam |
