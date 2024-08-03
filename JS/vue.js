Vue.filter('currency', function (value) {
   return '$' + value.toFixed(2);
});

var demo = new Vue({
   el: '#main',
   data: {
       services: [
          {
             name: 'Jacket',
             price: 40, 
             active:true
          },{
             name: 'Men shirt', 
             price: 36,
             active:false
          },{
             name:'MEN Jeans',
             price: 120,
             active:false
          },{
             name: 'shoes',
             price: 45,
             active:false
          }
       ]
   },
   methods: {
      toggleActive: function(s){
           s.active = !s.active;
      },
      total: function(){

          var total = 0;

          this.services.forEach(function(s){
             if (s.active){
                total+= s.price;
             }
          });

         return total;
       }
   }
});