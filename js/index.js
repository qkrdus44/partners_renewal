 $(document).ready(function(){
            
            
            $(window).scroll(function(){
                var sct=$(window).scrollTop();
                var ht=$('#event').height();
                
                if(sct>=ht){
                    $('#bottom_header').css({
                        position: 'fixed',
                        top: 0,
                    });
                }else if(sct<ht){
                    $('#bottom_header').css({
                        position: 'relative'
                    });
                }
            });
            
            $(window).scroll(function(){
                var sct=$(window).scrollTop();
                var ht=$('.swiper-container').height();
                
                if(sct>=ht){
                    $('#top').css({
                        opacity: 1
                    });
                }else if(sct<ht){
                    $('#top').css({
                        opacity: 0
                    });
                }
            });
            
            /*----------header hover*/
            
            
           var st = setInterval(function(){
                    $('.swiper-button-next').trigger('click');
                },1500);
            
            
            
            
            
        /*-------------------------banner hover*/    
            
        var i = 0;
                
                $('#b_1').click(function(){
                    
                    if(i == 0){
                        $('#b_1 img').attr({
                            src: 'img/b_1.png'
                        });
                        i++;
                    }else if(i == 1){
                        $('#b_1 img').attr({
                            src: 'img/best_1.png'
                        });
                        i=0;
                    }
                    
                });
            
            var st = setInterval(function(){
                    $('#b_1').trigger('click');
                },1000);
            
            var i = 0;
                
                $('#b_2').click(function(){
                    
                    if(i == 0){
                        $('#b_2 img').attr({
                            src: 'img/b_2.png'
                        });
                        i++;
                    }else if(i == 1){
                        $('#b_2 img').attr({
                            src: 'img/best_2.png'
                        });
                        i=0;
                    }
                    
                });
            
            var st = setInterval(function(){
                    $('#b_2').trigger('click');
                },1500);
            
            var i = 0;
            
            $('#b_3').click(function(){
                    
                    if(i == 0){
                        $('#b_3 img').attr({
                            src: 'img/b_3.png'
                        });
                        i++;
                    }else if(i == 1){
                        $('#b_3 img').attr({
                            src: 'img/best_3.png'
                        });
                        i=0;
                    }
                    
                });
            
            var st = setInterval(function(){
                    $('#b_3').trigger('click');
                },2000);
            
            var i = 0;
            
            $('#b_4').click(function(){
                    
                    if(i == 0){
                        $('#b_4 img').attr({
                            src: 'img/b_4.png'
                        });
                        i++;
                    }else if(i == 1){
                        $('#b_4 img').attr({
                            src: 'img/best_4.png'
                        });
                        i=0;
                    }
                    
                });
            
            var st = setInterval(function(){
                    $('#b_4').trigger('click');
                },2500);
            
        /*----------------------------------*/  
            
            $(window).scroll(function(){
                var sct=$(window).scrollTop();
                var ht= 420
                
                if(sct>=ht){
                    $('#pi_1').css({
                        width: '800px'
                    });
                }else if(sct<ht){
                    $('#pi_1').css({
                        width: '100%'
                    });
                }
            });
            
            $(window).scroll(function(){
                var sct=$(window).scrollTop();
                var ht= 1030
                
                if(sct>=ht){
                    $('#pi_2').css({
                        width: '800px'
                    });
                }else if(sct<ht){
                    $('#pi_2').css({
                        width: '100%'
                    });
                }
            });
            
            $(window).scroll(function(){
                var sct=$(window).scrollTop();
                var ht= 1640
                
                if(sct>=ht){
                    $('#pi_3').css({
                        width: '800px'
                    });
                }else if(sct<ht){
                    $('#pi_3').css({
                        width: '100%'
                    });
                }
            });
     
        var a = 0
            
            $('#ham').click(function(){
                
                if(a==0){
                    $('#ham_wrap').css({
                        width:'100%'
                    },1000);
                    a++;
                }else if(a==1){
                    $('#ham_wrap').css({
                        width: 0
                    },1000);
                    a--;
                }
            });
            
            $('#h_menu img:nth-child(2)').click(function(){
                $('#ham_wrap').css({
                        width: 0
                    },1000);
            });
     
            
     

        
        });/*end*/
            