# Javascripts DOM API and event listener
## 1.  Methods of adding events
### a. Adding as a `html element's` attribute
``` html
<button onclick="run(abc)">
```

```html
<a href="javascript:run(abc);">
```

> The `on` prefix is required to add an event. Example: `onclick`, `onscroll`

### b. Adding as a `DOM NodeItem's` attribute 
``` javascript
object.onclick = function() {
	// code
}
```

> The `on` prefix is required to add an event. Example: `onclick`, `onscroll`

### c. Using `addEventListener`
``` javascript
object.addEventListener = ( event , function callBack() {
	// code
})
```
## 2.  Callback's parameter in Javascript's event
|  property  | description  |
| ------------ | ------------ |
| `target` | Point to the object that has the event occuring  | 



