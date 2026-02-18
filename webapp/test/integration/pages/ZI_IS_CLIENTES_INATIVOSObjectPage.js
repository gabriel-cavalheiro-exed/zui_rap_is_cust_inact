sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.gamma.zuirapiscustinact',
            componentId: 'ZI_IS_CLIENTES_INATIVOSObjectPage',
            contextPath: '/ZI_IS_CLIENTES_INATIVOS'
        },
        CustomPageDefinitions
    );
});