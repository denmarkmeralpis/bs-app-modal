# App Modal
The `AppModal` utility provides a simple way to create, show, and manage Bootstrap modals dynamically.

#### Features
* Dynamically creates and shows a Bootstrap modal
* Supports different modal sizes (modal-md, modal-lg, etc.)
* Accepts an onShow callback, which runs after the modal is fully loaded
* Automatically removes the modal from the DOM after closing

### Usage

Importing AppModal
```javascript
import { AppModal } from "./AppModal.js";
```

Show a Modal
```javascript
AppModal.show({ 
  content: "<p>Hello, World!</p>", 
  size: "modal-lg" 
});
```

**Options:**
* `content` _(string)_: The HTML content inside the modal
* `size` _(string)_: Bootstrap modal size (`modal-sm`, `modal-md`, `modal-lg`, etc.)
* `onShow` _(function)_: Callback function executed after the modal is fully rendered

Show a Modal with onShow Callback
```javascript
AppModal.show({ 
  content: "<p>Modal with callback!</p>", 
  size: "modal-md", 
  onShow: () => { 
    console.log("Modal is fully shown!");
    document.querySelector("#appModal .modal-content").style.background = "lightblue";
  }
});
```

Close the Modal
```javascript
// This removes the modal from the DOM.
AppModal.close();

// If multiple modals exist, pass a custom modal ID:
AppModal.close("customModalId");
```

