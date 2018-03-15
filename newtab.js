


    if(window.location.pathname =="/newtab.html")
    {
        $(document).ready(function(){        
            time();
            var apiUrl = "https://api.unsplash.com";
            var quoteApi ="http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en";
            var height = window.innerHeight;
            var width= window.innerHeight;
            var client_id="?client_id=e15a9ed1a24f8886875ad12096807668f9a59478aad580e110c7084d180c5258";
            var user_name = window.localStorage.getItem('user_name');
            var user_name_template = `
             <input class="username" type="text" />
             <button class="saveName" id="submitName">Save Name</button>
            `;
         
            var master_template=`
            <span class="welcome">
             Hello, Master  `+user_name+`.
             </span>
            `;
            if(user_name)
            {
             $(".welcome-div").html(master_template);
            }
            else
            {
                 $(".welcome-div").html(user_name_template);
            }
            var dataJson = {
                1:"Hello, Master",
                2:""
            };
         
            $("#submitName").on('click', function(x){
                var name = $(".username").val();
                window.localStorage.setItem("user_name", name);
                user_name = name;
                $(".welcome-div").html(`
                <span class="welcome">
                 Hello, Master  `+user_name+`.
                 </span>
                `);
            });
         
            $.ajax({
                type:"GET",
             //    url:apiUrl+"/photos/random"+ client_id+"&h="+height+"&w="+width,
                url:apiUrl+"/photos"+client_id,
                success:function(data){
                    console.log(data);
                 //    getquote();
                 //    $('body').css({"background-image":"url('"+data.urls.full+"')","background-size":"cover"})
                },
                error:function(x,h,r){
                    console.log(x);
                    console.log(h);
                    console.log(r);
                }
            })
         
            function getquote(){
                $.ajax({
                    type:"GET",
                    url: quoteApi,
                    success:function(x){
                        console.log(x);
                        var author = x.quoteAuthor;
                        var quote = x.quoteText;
         
                        $(".curr-quote .quote").text(quote);
                        $(".curr-quote .author").text("- "+author);
         
                    },
                    error:function(x,h,r){
                        console.log(x);
                        console.log(h);
                        console.log(r);
                    }
                })
            }
           
         });
         
         
         function time(){
             var date = new Date();
             var hours = date.getHours();
             var min = date.getMinutes();
             var secs = date.getSeconds();
             var hours_am_pm = (hours > 12)? hours - 12 : hours;
             var am_pm = (hours > 12)? "PM": "AM";
             $(".time").text(hours_am_pm+":"+min+":"+secs+" "+am_pm);
             setTimeout(time,10);
         };
         
         
                     
    }
