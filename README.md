# Menu_Active
Ajoute une classe à votre menu courent 

## Exemple

```html
<style>
    .active {
        color: #F00;
    }
</style>

<ul id="menu">
    <li><a href="/exemple/">Accueil</a></li>
    <li><a href="/exemple/pages/">Pages</a>
        <ul>
            <li><a href="/exemple/pages/page1.html">Page 1</a></li>
            <li><a href="/exemple/pages/page2.html">Page 2</a></li>
            <li><a href="/exemple/pages/page3.html">Page 3</a></li>
            <li><a href="/exemple/pages/page4.html">Page 4</a></li>
        </ul>
    </li>
    <li><a href="/exemple/page1.html">Page 1</a></li>
    <li><a href="/exemple/page2.html">Page 2</a></li>
    <li><a href="/exemple/page3.html">Page 3</a></li>
    <li><a href="/exemple/page4.html">Page 4</a></li>
</ul>

<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="src/jquery.menuActive.js"></script>
<script type="text/javascript">
    jQuery(function($){
        $("#menu").menuActive({
          homeFirst: true
        });
    });
</script>
```
