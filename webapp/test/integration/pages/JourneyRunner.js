sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/gamma/zuirapiscustinact/test/integration/pages/ZI_IS_CLIENTES_INATIVOSList",
	"br/com/gamma/zuirapiscustinact/test/integration/pages/ZI_IS_CLIENTES_INATIVOSObjectPage"
], function (JourneyRunner, ZI_IS_CLIENTES_INATIVOSList, ZI_IS_CLIENTES_INATIVOSObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/gamma/zuirapiscustinact') + '/test/flp.html#app-preview',
        pages: {
			onTheZI_IS_CLIENTES_INATIVOSList: ZI_IS_CLIENTES_INATIVOSList,
			onTheZI_IS_CLIENTES_INATIVOSObjectPage: ZI_IS_CLIENTES_INATIVOSObjectPage
        },
        async: true
    });

    return runner;
});

