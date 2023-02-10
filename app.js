import Vue from 'vue';

new Vue({
  el: '#slot',
  data(){
    return{

      maxbetFlg : false,
      leverFlg  : false,
      stopbtnFlg: false,
      timeoutId : '',
      isStarted: false,
      image : 'public/img/akanana.png',
      getResult: '',
      resultOpenFlg: false,

      result: [
        {
          //大吉
          id: 1,
          luck: '大吉',
          text: '今日はやれる!?「引き」が激アツな雰囲気が出ています。ここぞの場面で「神引き」が出て大勝ち濃厚!?',
          picture: 'public/img/fever.png',
          slot: 'public/img/aonana.png',
          showFlg: false
        },
        {
          //吉
          id: 2,
          luck: '吉',
          text: '今日の勝負運は良好です。アツい気配がするので勝負するなら良い日かも！',
          picture: 'public/img/img6.png',
          slot: 'public/img/akanana.png',
          showFlg: false
        },
        {
          //中吉
          id: 3,
          luck: '中吉',
          text: '「トントン」で終わればOKくらいの気持ちで遊ぶには良い日でしょう。期待しすぎて爆死しないように。',
          picture: 'public/img/img7.png',
          slot: 'public/img/cherry.png',
          showFlg: false
        },
        {
          //小吉
          id: 4,
          luck: '小吉',
          text: '運勢は悪くありません。ただ、欲を出すと「飲まれる」可能性も高いので勝ち逃げを心がけて！',
          picture: 'public/img/img9.png',
          slot: 'public/img/bag.png',
          showFlg: false
        },
        {
          //末吉
          id: 5,
          luck: '末吉',
          text: '「可もなく不可もなく」な勝負運。冷静な立ち回りができれば楽しく遊べそうな一日。',
          picture: 'public/img/img8.png',
          slot: 'public/img/bell.png',
          showFlg: false
        },
        {
          //凶
          id: 6,
          luck: '凶',
          text: '今日は「低設定」な雰囲気。一撃性を秘めているものの、いろんな面で注意が必要。熱くなりすぎないように！',
          picture: 'public/img/img4.png',
          slot: 'public/img/replay.png',
          showFlg: false
        },
        {
          //大凶
          id: 7,
          luck: '大凶',
          text: '激アツすらも外しそうな雰囲気の1日。養分にならないように今日はYouTubeの試打動画でも見ていては？',
          picture: 'public/img/img5.png',
          slot: 'public/img/skull.png',
          showFlg: false
        }
      ],
    }
  },

  // メソッド
  methods: {
      //MAXBETボタンONを検知する
      onBet: function(){
        this.maxbetFlg = true
      },
      //画像をランダムに取得する
      getReelImg: function(){
        let randomIndex = Math.floor(Math.random() * this.result.length);
        this.image = this.result[randomIndex].slot;
        this.getResult = this.result[randomIndex];
      },

      //スロットスタート
      slotStart: function(){

        if(this.maxbetFlg = true){

          //レバーON
          if(!this.leverFlg){
            this.leverFlg = true;
          }

          //画像が切り替わるように
          this.timeoutId = setTimeout(() => {
            //リールの画像の取得
            this.getReelImg();
            //STOP押すまでは何度もこのメソッドを呼び出す
            this.slotStart();
          }, 0.0001);
        }
      },

      //STOPボタンを押したらスロット（対応のリール）をストップするメソッド
      reelStop: function(){
        //既にSTOPしてるのは除外
        if(this.stopbtnFlg){
          return
        }
        //setIntervalを解除
        clearInterval(this.timeoutId);
        //STOPボタンをONに
        this.stopbtnFlg = true;
        this.getResult.showFlg = true;
        this.resultOpenFlg = true;
        this.init();
      },

      //初期化
      init: function(){
        this.maxbetFlg  = false,
        this.stopbtnFlg = false,
        this.leverFlg   = false
      },

      //画像初期化
      resetImg: function(){
        this.image = 'public/img/akanana.png'
      },

  },

})



