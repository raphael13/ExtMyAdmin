Ext.require([
    'Ext.direct.*'
]);

Ext.onReady(function(){
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
});

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'EJMA',

    appFolder: 'app',

    controllers: [
        'TableList'
    ],

    launch: function() {
    
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