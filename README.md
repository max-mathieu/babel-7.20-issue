[Reference](https://github.com/babel/babel/issues/15085)

To repro:

* Clone this repo
* Run `npm install`
* Run `npm run lint`

This triggers
```
TypeError: Cannot read property 'before' of undefined at checkSpacingBefore
```
on the line with the decorator

But if you do:

* `npm install @babel/helpers@~7.19 @babel/traverse@~7.19 @babel/parser@~7.19`
* `npm run lint`

Then it passes validation
