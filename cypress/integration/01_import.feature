# Feature: Import Data

#   As a user I want to import data from an S3 bucket to Canvas
#   As a user I want to import data from my computer to Canvas
#   As a user I want to make sure I added the correct data
#   As a user I want to add a data source to Canvas
#   As a user I want to understand when a data source fails to connect to Canvas
#   As a user I want to edit or delete a data source connected to Canvas
#   As a user I want to import data from Snowflake to Canvas

#   @skip
#   Scenario: I want to import data from S3 to Canvas

Feature: Google Main Page

  I want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title