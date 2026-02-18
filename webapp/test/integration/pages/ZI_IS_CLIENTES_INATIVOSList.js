sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.gamma.zuirapiscustinact',
            componentId: 'ZI_IS_CLIENTES_INATIVOSList',
            contextPath: '/ZI_IS_CLIENTES_INATIVOS'
        },
        CustomPageDefinitions
    );
});