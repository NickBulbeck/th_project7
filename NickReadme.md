Design notes.

Firstly, remember that application state is analogous to data design in some ways. Certainly, you need to design the state, and keep each element of the state as high up as possible so that everything that needs to access it, can.

Secondly, as an extension to this, remember that data flows down through the components via props. This is called uni-directional data flow. You need to design around this.

Thirdly, when two more more components need access to the same state, we put it into their nearest common ancestor. This is called lifting state up.

Fourthly, when a child component does need to modify state stored above it, you can design it to do so by passing a callback to it via props.