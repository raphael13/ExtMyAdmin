Ext.define('EJMA.view.TableList' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.tablelist',

    title: 'All Users',
    
    store: 'Tables',

    initComponent: function() {

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1}
        ];

        this.callParent(arguments);
    }
});