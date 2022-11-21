function createTrackItem(index,name,duration){
    var trackItem = document.createElement('div');
    trackItem.setAttribute("class", "playlist-track-ctn");
    trackItem.setAttribute("id", "ptc-"+index);
    trackItem.setAttribute("data-index", index);
    document.querySelector(".playlist-ctn").appendChild(trackItem);

    var playBtnItem = document.createElement('div');
    playBtnItem.setAttribute("class", "playlist-btn-play");
    playBtnItem.setAttribute("id", "pbp-"+index);
    document.querySelector("#ptc-"+index).appendChild(playBtnItem);

    var btnImg = document.createElement('i');
    btnImg.setAttribute("class", "fas fa-play");
    btnImg.setAttribute("height", "40");
    btnImg.setAttribute("width", "40");
    btnImg.setAttribute("id", "p-img-"+index);
    document.querySelector("#pbp-"+index).appendChild(btnImg);

    var trackInfoItem = document.createElement('div');
    trackInfoItem.setAttribute("class", "playlist-info-track");
    trackInfoItem.innerHTML = name
    document.querySelector("#ptc-"+index).appendChild(trackInfoItem);

    var trackDurationItem = document.createElement('div');
    trackDurationItem.setAttribute("class", "playlist-duration");
    trackDurationItem.innerHTML = duration
    document.querySelector("#ptc-"+index).appendChild(trackDurationItem);
  }

  var listAudio = [
    
    {
      name:"S1A1 Deen Ko Samajh Kar Ikhtiyar Karna Chahiye",
      file:"https://docs.google.com/uc?export=download&id=109k9Ut0t7HsQAxpCpqkU761tk3LFtNzt",
      duration:"06:42"
    },
    {
      name:"S1A2 Kufr Bit-Taghut",
      file:"https://docs.google.com/uc?export=download&id=100PXNHp98CrHagJSizMizXDuy6L2DuzX",
      duration:"07:04"
    },
    {
      name:"S1A3 Allah tala ka humare sath jo rishta hai",
      file:"https://docs.google.com/uc?export=download&id=107sCG6OQeeuwkhrS8Lw_cgLYoiglG3a8",
      duration:"05:55"
    },
    {
      name:"S1A4 Allah Humara Sarparast Hai",
      file:"https://docs.google.com/uc?export=download&id=109k9Ut0t7HsQAxpCpqkU761tk3LFtNzt",
      duration:"05:28"
    },
     {
       name:"S1A5 Namaz Me Topi Sawal?",
       file:"https://docs.google.com/uc?export=download&id=10B1XHLwUSHdy_ZDqWg1Za3R5T3SO0Z2g",
       duration:"04:07"
     },
     {
       name:"S1A6 kaza e umari sawal?",
       file:"https://docs.google.com/uc?export=download&id=10BqbgPiEDSb0YoNoor2-91CCfINFY3CR",
       duration:"09:43"
     },
    {
      name:"S1A7",
      file:"https://docs.google.com/uc?export=download&id=10BrqIwGuJApySFriln_aOUQA4bbHqxMX",
      duration:"05:07"
    },
    {
      name:"S1A8 Hidayat Kya Hai",
      file:"https://docs.google.com/uc?export=download&id=10Dl0sbvdTmyv9EOY5QQpG3wnRbn13RgS",
      duration:"07:36"
    },
    {
      name:"S1A9",
      file:"https://docs.google.com/uc?export=download&id=10SECOAHfLswGXx6YLPvWipDN0CZ7C7fZ",
      duration:"03:45"
    },
    {
      name:"S1A10 Akhlaq e Rasoolullah SAW",
      file:"https://docs.google.com/uc?export=download&id=1-KKUp2oeoiA7ym45f0dzMfoE_1MUqZs8",
      duration:"07:38"
    },
    {
      name:"S1A11 Allah Zabardasti Nahi Karta",
      file:"https://docs.google.com/uc?export=download&id=1-NrPIriJ_LOKrQRg30y4lmXisRsKX_Np",
      duration:"03:30"
    },
    {
      name:"S1A12 Hidayat Allah Ke Hath Hai",
      file:"https://docs.google.com/uc?export=download&id=1-_NRApO2-qbUWf14hwIkdnQm_PIS5eWA",
      duration:"06:25"
    },
    {
      name:"S1A13 Basaa'ir",
      file:"https://docs.google.com/uc?export=download&id=1-gHDgPYnkSb8JDbYdp69rrt-46lopgOj",
      duration:"04:38"
    },
    {
      name:"S1A14 Quran 10:108",
      file:"https://docs.google.com/uc?export=download&id=1-glefmprMs73klPOe9PdNVyPAoVrCGjc",
      duration:"04:23"
    },
    {
      name:"S1A15",
      file:"https://docs.google.com/uc?export=download&id=1-r-ErTlpN-_N_TehDmK99CVT9NFz8Ldp",
      duration:"07:08"
    },
    {
      name:"S1A16 Haram & Halal",
      file:"https://docs.google.com/uc?export=download&id=1-zybftKUwumeH_fu9r5HdqB_NeLBRTFa",
      duration:"08:50"
    },
    {
      name:"S1A17 Takwini",
      file:"https://docs.google.com/uc?export=download&id=10-Cj3IHCociyFEnEthI-jYKQzMJI8lTz",
      duration:"04:17"
    },
    {
      name:"S2A1 Fitrat Quran 30:30",
      file:"https://docs.google.com/uc?export=download&id=10_tZYm8lNc5zIcGqMx-MFKkKucHY6g31",
      duration:"06:21"
    },
    {
      name:"S2A2 Be Aql, Gafil",
      file:"https://docs.google.com/uc?export=download&id=10fWQ4f5KQMBSCpnqhiqJsaexBV4nJmWy",
      duration:"05:12"
    },
    {
      name:"S2A3 Shaytan",
      file:"https://docs.google.com/uc?export=download&id=10kXyJ1QyVzC-Mwhbh4zDlebFWlQfuR82",
      duration:"06:54"
    },
    {
      name:"S2A4 Quran4:119",
      file:"https://docs.google.com/uc?export=download&id=10tbOxrf7qOezJR90oyhPnGOpZG3gmjHt",
      duration:"05:26"
    },
    {
      name:"S2A5 Quran 4:119 Detail",
      file:"https://docs.google.com/uc?export=download&id=10trMomScoiYip5nv87QPPawsndDvByLs",
      duration:"06:36"
    },
    {
      name:"S2A6 Fitrat Ki Pehchan",
      file:"https://docs.google.com/uc?export=download&id=10wjfJmjjmCu2hrfbaHgLrzxK5iD0qHi-",
      duration:"06:38"
    },
    {
      name:"S2A7 Creation & Cause",
      file:"https://docs.google.com/uc?export=download&id=111RRz8E8YfZ4SLGcmGbsvaLaybbK-Orw",
      duration:"06:21"
    },
    {
      name:"S2A8 Ibaadat",
      file:"https://docs.google.com/uc?export=download&id=111RRz8E8YfZ4SLGcmGbsvaLaybbK-Orw",
      duration:"07:09"
    },
    {
      name:"S3A1 Direct Command",
      file:"https://docs.google.com/uc?export=download&id=11L4zgyAsFJNJrakBDBdHaJYuerS5E-H8",
      duration:"06:06"
    },
    {
      name:"S3A2 Desire as God",
      file:"https://docs.google.com/uc?export=download&id=11UiyWQGWVyb0dBcSgOffM6h38PT51wyD",
      duration:"05:11"
    },
    {
      name:"S3A3 Desire-Idols",
      file:"https://docs.google.com/uc?export=download&id=11XDYP8sXm5OVTfXWkTJbe-TSMK4y6VcT",
      duration:"00:00"
    },
    {
      name:"S3A4",
      file:"https://docs.google.com/uc?export=download&id=11YyMVCA11q-yQjzIu3ZEdcbJbuCXHU7b",
      duration:"06:40"
    },
    {
      name:"S3A5 Desire-La Yahdi",
      file:"https://docs.google.com/uc?export=download&id=11_0enM_ojaFpsW6Yv7_r6fqeq6m3_dhL",
      duration:"06:22"
    },
    {
      name:"S3A6 Buzurg-Part 1",
      file:"https://docs.google.com/uc?export=download&id=11huSjNiqyKYuOYnStOqupeBYb8vkM8n4",
      duration:"06:03"
    },
    {
      name:"S3A7 Buzurg-Part 2",
      file:"https://docs.google.com/uc?export=download&id=11jDvztk7ebZ2835A6F0yUbG6Ysboxtq3",
      duration:"05:02"
    },
    {
      name:"S3A8",
      file:"https://docs.google.com/uc?export=download&id=11kczu4uiCdXhBYyjujhPTWw_3mBExGQz",
      duration:"07:07"
    },
    {
      name:"S3A9",
      file:"https://docs.google.com/uc?export=download&id=11l6BWgMd8xKhg0jjaPpye-LmgN0g0Tnc",
      duration:"06:06"
    },
    {
      name:"S4A1 Shaytan-Part 1",
      file:"https://docs.google.com/uc?export=download&id=11qASMVyL-sWBAW_t7kznxTRqwtpbYpSk",
      duration:"06:14"
    },
    {
      name:"S4A2 Shaytan-Part 2",
      file:"https://docs.google.com/uc?export=download&id=11rxEYKxcEgS7MJOGdZVHiQaFhmP5z-KX",
      duration:"05:12"
    },
    {
      name:"S5A1 Eid Ul Adha",
      file:"https://docs.google.com/uc?export=download&id=11xci23nzHhFcHK_tm11pKNhwFj5YKJG1",
      duration:"06:18"
    },
    {
      name:"S6A1 ZillHajj",
      file:"https://docs.google.com/uc?export=download&id=12GXG0ff3RaCWuHF4XVcBYgzC4IjbaE2Q",
      duration:"14:02"
    },
     {
       name:"S7A2 Dumm Karna Sawal",
       file:"https://docs.google.com/uc?export=download&id=12SacL1880y1yueIn7j3IoxNqX4V3_kdr",
       duration:"05:05"
     },
    
    {
      name:"Shafa'at Series - Part 1",
      file:"https://docs.google.com/uc?export=download&id=1MMwBOcNGyGhL088tVqZLQVYSNNQ_x6o3",
      duration:"12:17"
    },
    {
      name:"Shafa'at Series - Part 2",
      file:"https://docs.google.com/uc?export=download&id=1MRbItLP5cLYCsXVUNtSWAaKsBcjY_11-",
      duration:"10:52"
    },
    {
      name:"Shafa'at Series - Part 3",
      file:"https://docs.google.com/uc?export=download&id=1MkG9NBvIv4pJhhXIV7PYv-Y2Chz19s8Z",
      duration:"10:37"
    },
    {
      name:"Shafa'at Series - Part 4",
      file:"https://docs.google.com/uc?export=download&id=1MviGC29SsqM0PKAVEIYuaWFkhArTGRQj",
      duration:"05:18"
    },
    {
      name:"Shafa'at Series - Part 5",
      file:"https://docs.google.com/uc?export=download&id=1MwEAzFuyngDSl-44AmeIbwjYjk5RRe1g",
      duration:"04:52"
    },
    {
      name:"Shafa'at Series - Part 6",
      file:"https://docs.google.com/uc?export=download&id=1N5fjiNEaD7qoJ5EiyIw5hVi6bKox3r68",
      duration:"06:37"
    },
    {
      name:"Shafa'at Series - Part 7",
      file:"https://docs.google.com/uc?export=download&id=1N6SA7eOC2Bh9QZLeIhpke3o3XET9exD3",
      duration:"09:12"
    },
    {
      name:"Shafa'at Series - Part (Final) 8",
      file:"https://docs.google.com/uc?export=download&id=1N7gUtdikFofQSjMh74HvNH9q4nxwBAWi",
      duration:"05:28"
    }
  ]

  for (var i = 0; i < listAudio.length; i++) {
      createTrackItem(i,listAudio[i].name,listAudio[i].duration);
  }
  var indexAudio = 0;

  function loadNewTrack(index){
    var player = document.querySelector('#source-audio')
    player.src = listAudio[index].file
    document.querySelector('.title').innerHTML = listAudio[index].name
    this.currentAudio = document.getElementById("myAudio");
    this.currentAudio.load()
    this.toggleAudio()
    this.updateStylePlaylist(this.indexAudio,index)
    this.indexAudio = index;
  }

  var playListItems = document.querySelectorAll(".playlist-track-ctn");

  for (let i = 0; i < playListItems.length; i++){
    playListItems[i].addEventListener("click", getClickedElement.bind(this));
  }

  function getClickedElement(event) {
    for (let i = 0; i < playListItems.length; i++){
      if(playListItems[i] == event.target){
        var clickedIndex = event.target.getAttribute("data-index")
        if (clickedIndex == this.indexAudio ) { // alert('Same audio');
            this.toggleAudio()
        }else{
            loadNewTrack(clickedIndex);
        }
      }
    }
  }

  document.querySelector('#source-audio').src = listAudio[indexAudio].file
  document.querySelector('.title').innerHTML = listAudio[indexAudio].name


  var currentAudio = document.getElementById("myAudio");

  currentAudio.load()
  
  currentAudio.onloadedmetadata = function() {
        document.getElementsByClassName('duration')[0].innerHTML = this.getMinutes(this.currentAudio.duration)
  }.bind(this);

  var interval1;

  function toggleAudio() {

    if (this.currentAudio.paused) {
      document.querySelector('#icon-play').style.display = 'none';
      document.querySelector('#icon-pause').style.display = 'block';
      document.querySelector('#ptc-'+this.indexAudio).classList.add("active-track");
      this.playToPause(this.indexAudio)
      this.currentAudio.play();
    }else{
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      this.currentAudio.pause();
    }
  }

  function pauseAudio() {
    this.currentAudio.pause();
    clearInterval(interval1);
  }

  var timer = document.getElementsByClassName('timer')[0]

  var barProgress = document.getElementById("myBar");


  var width = 0;

  function onTimeUpdate() {
    var t = this.currentAudio.currentTime
    timer.innerHTML = this.getMinutes(t);
    this.setBarProgress();
    if (this.currentAudio.ended) {
      document.querySelector('#icon-play').style.display = 'block';
      document.querySelector('#icon-pause').style.display = 'none';
      this.pauseToPlay(this.indexAudio)
      if (this.indexAudio < listAudio.length-1) {
          var index = parseInt(this.indexAudio)+1
          this.loadNewTrack(index)
      }
    }
  }


  function setBarProgress(){
    var progress = (this.currentAudio.currentTime/this.currentAudio.duration)*100;
    document.getElementById("myBar").style.width = progress + "%";
  }


  function getMinutes(t){
    var min = parseInt(parseInt(t)/60);
    var sec = parseInt(t%60);
    if (sec < 10) {
      sec = "0"+sec
    }
    if (min < 10) {
      min = "0"+min
    }
    return min+":"+sec
  }

  var progressbar = document.querySelector('#myProgress')
  progressbar.addEventListener("click", seek.bind(this));


  function seek(event) {
    var percent = event.offsetX / progressbar.offsetWidth;
    this.currentAudio.currentTime = percent * this.currentAudio.duration;
    barProgress.style.width = percent*100 + "%";
  }

  function forward(){
    this.currentAudio.currentTime = this.currentAudio.currentTime + 5
    this.setBarProgress();
  }

  function rewind(){
    this.currentAudio.currentTime = this.currentAudio.currentTime - 5
    this.setBarProgress();
  }


  function next(){
    if (this.indexAudio <listAudio.length-1) {
        var oldIndex = this.indexAudio
        this.indexAudio++;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function previous(){
    if (this.indexAudio>0) {
        var oldIndex = this.indexAudio
        this.indexAudio--;
        updateStylePlaylist(oldIndex,this.indexAudio)
        this.loadNewTrack(this.indexAudio);
    }
  }

  function updateStylePlaylist(oldIndex,newIndex){
    document.querySelector('#ptc-'+oldIndex).classList.remove("active-track");
    this.pauseToPlay(oldIndex);
    document.querySelector('#ptc-'+newIndex).classList.add("active-track");
    this.playToPause(newIndex)
  }

  function playToPause(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-play");
    ele.classList.add("fa-pause");
  }

  function pauseToPlay(index){
    var ele = document.querySelector('#p-img-'+index)
    ele.classList.remove("fa-pause");
    ele.classList.add("fa-play");
  }


  function toggleMute(){
    var btnMute = document.querySelector('#toggleMute');
    var volUp = document.querySelector('#icon-vol-up');
    var volMute = document.querySelector('#icon-vol-mute');
    if (this.currentAudio.muted == false) {
       this.currentAudio.muted = true
       volUp.style.display = "none"
       volMute.style.display = "block"
    }else{
      this.currentAudio.muted = false
      volMute.style.display = "none"
      volUp.style.display = "block"
    }
  }