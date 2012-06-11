Ext.require([
    'Ext.direct.*'
]);

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'EJMA',

    appFolder: 'app',

    controllers: [
        'TableList'
    ],

    launch: function() {
        Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);            
    
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'tablelist'
                }
            ]
        });
    }
});