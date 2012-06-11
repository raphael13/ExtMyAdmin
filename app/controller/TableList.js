Ext.define('EJMA.controller.TableList', {
    extend: 'Ext.app.Controller',
    
    views: ['TableList'],
    models: ['Table'],
    stores: ['Tables'],

    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },
    
    onPanelRendered: function() {
        console.log('The panel was rendered');
    }    
});