# DialogLoading
## Introduction
DialogLoading is a simple popup written in vanilla Javascript. You can use it in any of your application where,It is used to display a pop-up window during long operations or operations that require downloading resources from the Internet.

## Live Preview
("./index.html")

## Installation 
The most easiest way to Use DialogLoading link:

```javascript
<script src="../dialog_progress/DialogLoading.js"></script>
```
Always use the latest version. The lastest version is **1.0.0**

## Usage
Once you have linked the CDN, you can simply use the DialogLoading.

1. If you want to display a simple Dialog 

```javascript
<script>

  DialogLoading( {
                  text: "Deny", 
                  background: "tomato",
                  color: "white",
  },true);

</script>
```
### Result
"../dialog_progress/screenshote/Screenshot 2024-11-18 at 13-08-47 DialogLoading.png"

________________________________________________________________

2. It can be used as an embedded element in the page provided that its members must have the container id.

```javascript
<script>
  var domElement = document.getElementById("div");
  DialogLoading( {
                text: "Deny", 
                background: "tomato",
                color: "white",
  },false,domElement);

</script>
```

### Result
"./screenshote/Screenshot 2024-11-18 at 15-58-31 DialogLoading.png"

3. If you want to Close or delete using function

  Close_DialogLoading();
____________________________________________

## Customizations
You can customize the look and feel of the window as follows:

```javascript
<script>
  var html = "<div id='jsLoade'></div><h4 id ='jsText'>جاري تحميل...</h4>";
  var style = "#jsLoade{width:50px;height:50px;border:8px solid #dddddd;margin-right:4px;position:relative;z-index:1;border-radius:50%;margin-bottom:32px;border-top:8px solid #F898D6;webkit-animation:skin 0.5s linear infinite;animation:skin 0.5s linear infinite;}#jsText{color:#000000;font-weight:bold;text-align:center;margin:0px;padding:0px;font-size:0.9em;}";
  DialogLoading({
      text: "جاري تحميل...",
      html:html,
      style:style
  },true);
</script>
```

### Result
("../dialog_progress/screenshote/Screenshot 2024-11-18 at 19-04-32 DialogLoading.png")


