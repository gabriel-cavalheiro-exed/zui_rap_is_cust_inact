sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZI_IS_CLIENTES_INATIVOSList.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZI_IS_CLIENTES_INATIVOSList.onFilterBar().iExecuteSearch();
            
            Then.onTheZI_IS_CLIENTES_INATIVOSList.onTable().iCheckRows();

            When.onTheZI_IS_CLIENTES_INATIVOSList.onTable().iPressRow(0);
            Then.onTheZI_IS_CLIENTES_INATIVOSObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});