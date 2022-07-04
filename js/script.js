$(document).ready(function(){
            
            var wh = $(window).height();
            
            $('#wrap').css({
                width: '100%',
                height: wh*4
            });
            
            $('#cha_page').css({
                width: '100%',
                height: 0,
                backgroundColor: '#f6f6f6'
            });
            
            $('#han_page').css({
                width: '100%',
                height: 0,
                backgroundColor: '#f6f6f6'
            });
            
            $('#yeon_page').css({
                width: '100%',
                height: 0,
                backgroundColor: '#f6f6f6'
            });
            
            $('section').css({
                width: '100%',
                height: wh,
                backgroundColor: '#f9f9f9'
            });
            
            $('#section_1, #section_3').css({
                backgroundColor: '#ebebec'
            });
            
            $('#section_2, #section_4').css({
                backgroundColor: '#f6f6f6'
            });
            
            /*-----------------------------------배경색*/
            
            
            $('.menu_1').click(function(){
                $('html,body').animate({
                    scrollTop: wh
                });
            });
            
            $('.menu_2').click(function(){
                $('html,body').animate({
                    scrollTop: wh*2
                });
            });
            
            $('.menu_3').click(function(){
                $('html,body').animate({
                    scrollTop: wh*3
                });
            });
            
            /*-------------------------------------메뉴 클릭 이동*/
            
            
           var wh = $(window).height();
            
        $(window).scroll(function(){
            sct = $(window).scrollTop();
            
            if(sct>=wh && sct< wh*2){
                $('.menu_1').css({
                    textDecoration: 'underLine'
                });
                $('.menu_2').css({
                    textDecoration: 'none'
                });
                $('.menu_3').css({
                    textDecoration: 'none'
                });
                $('#graph').css({
                    opacity: '1'
                });
                $('#com_box').css({
                    opacity: '1'
                });
            }else if(sct >= wh*2 && sct < wh*3){
                $('.menu_2').css({
                    textDecoration: 'underLine'
                });
                $('.menu_1').css({
                    textDecoration: 'none'
                });
                $('.menu_3').css({
                    textDecoration: 'none'
                });
            }else if(sct >= wh*3 && sct < wh*4){
                $('.menu_3').css({
                    textDecoration: 'underLine'
                });
                $('.menu_1').css({
                    textDecoration: 'none'
                });
                $('.menu_2').css({
                    textDecoration: 'none'
                });
            }else if(sct >= 0 && sct < wh){
                $('.menu_1').css({
                    textDecoration: 'none'
                });
                $('.menu_2').css({
                    textDecoration: 'none'
                });
                $('.menu_3').css({
                    textDecoration: 'none'
                });    
                }
        });
            
            /*----------------------------------스크롤 밑줄*/
            
            $('.menu_1').mouseenter(function() {
                $(this).css({
                    textDecoration: 'underLine'
                });
            }).mouseleave(function() {
                $(this).css({
                    textDecoration: 'none'
                });
            });
            
            $('.menu_2').mouseenter(function() {
                $(this).css({
                    textDecoration: 'underLine'
                });
            }).mouseleave(function() {
                $(this).css({
                    textDecoration: 'none'
                });
            });
            
            $('.menu_3').mouseenter(function() {
                $(this).css({
                    textDecoration: 'underLine'
                });
            }).mouseleave(function() {
                $(this).css({
                    textDecoration: 'none'
                });
            });
            
            
            
            /*---------------------------------------마우스 밑줄*/
            
           
            
            $('#cir_1').click(function(){
                $('#cha_page').css({
                        height: wh
                    },1000);
            });
            
            $('.x_box img').click(function(){
                $('#cha_page').css({
                        height: 0
                    },1000);
            });
            
            $('#cir_2').click(function(){
                $('#han_page').css({
                        height: wh
                    },1000);
            });
            
            $('.x_box img').click(function(){
                $('#han_page').css({
                        height: 0
                    },1000);
            });
            
            $('#cir_3').click(function(){
                $('#yeon_page').css({
                        height: wh
                    },1000);
            });
            
            $('.x_box img').click(function(){
                $('#yeon_page').css({
                        height: 0
                    },1000);
            });
            
            /*----------------------------------아티스트 페이지*/
            
            $('#btn_wrap li').each(function(index){
                $(this).attr('data_index', index);
            });
            
            
            $('#btn_wrap li').click(function(){
                var i = $(this).attr('data_index');
                
                $('#img_wrap').animate({
                    left: -900*i
                });
                
                $('#btn_wrap li').removeClass('active');
                $('#btn_wrap li').eq(i).addClass('active');
            });
    
    /*----------------------------------------------------------*/
    
    
    var i = 0;
                
                $('.in_hover:nth-child(1)').click(function(){
                    
                    if(i == 0){
                        $('#h_1').css({
                            display: 'block'
                        });
                        i++;
                    }else if(i == 1){
                        $('#h_1').css({
                            display: 'none'
                        });
                        i=0;
                    }
                    
                });
    
    $('.in_hover:nth-child(2)').click(function(){
                    
                    if(i == 0){
                        $('#h_2').css({
                            display: 'block'
                        });
                        i++;
                    }else if(i == 1){
                        $('#h_2').css({
                            display: 'none'
                        });
                        i=0;
                    }
                    
                });
    
    $('.in_hover:nth-child(3)').click(function(){
                    
                    if(i == 0){
                        $('#h_3').css({
                            display: 'block'
                        });
                        i++;
                    }else if(i == 1){
                        $('#h_3').css({
                            display: 'none'
                        });
                        i=0;
                    }
                    
                });
    
    /*---------------------------------------------------*/
            
            $('.ham_btn').click(function(){
                $('.ham_wrap').css({
                        height: '100%'
                    },1000);
            });
            
            $('.del_btn').click(function(){
                $('.ham_wrap').css({
                        height: 0
                    },1000);
            });
    
    
    /*-------------------------------------------------------*/
    
    mask_width=$('.n_i_wrap').width();
        
        $('.right_move').click(function(){
           $('#img_wrap_1').animate({
               left : -mask_width,
           }, 1000, function(){
               $('#img_wrap_1').css({
                   left : 0,
               }).find('.n_i_wrap').first().appendTo('#img_wrap_1');
           });
        });
        
        $('.left_move').click(function(){
            $('#img_wrap_1').animate({
                left : 0,
            }, 1000, function(){
                $('#img_wrap_1').css({
                    left : -mask_width,
                }).find('.n_i_wrap').last().prependTo('#img_wrap_1');
            });
        });
        
        time();
        
        $('#next_box img').hover(function(){
            clearInterval(a);
        }, function(){
            time();
        });
    
            
        });/*end*/