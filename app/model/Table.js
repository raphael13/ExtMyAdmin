Ext.define('EJMA.model.Table', {
    extend: 'Ext.data.Model',
    fields: ['name'],
    
    proxy: {
        type: 'direct',
        directFn: Tables.Get,
//        paramOrder: 'id' // Tells the proxy to pass the id as the first parameter to the remoting method.
    }    
});