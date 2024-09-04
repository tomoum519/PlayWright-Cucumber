Feature: Addcart Feature

  @testcasekey=SPSPS-518 @Test
  Scenario: Add Cart
    Given Sign up and login
    When visit shop and add product to the Cart
    Then procced tp checkout and Check the prodcut same as the selected product