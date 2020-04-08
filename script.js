// Selectors
let root = document.querySelector(':root')
let body = document.querySelector('body')
let aLinks = document.querySelectorAll('a')

// Create Elements
let container = document.createElement('div')
let navigation = document.createElement('nav')
let ul = document.createElement('ul')
let home = document.createElement('li')
let homeLink = document.createElement('a')
let homeNode = document.createTextNode('Home')
let about = document.createElement('li')
let aboutLink = document.createElement('a')
let aboutNode = document.createTextNode('About')
let contact = document.createElement('li')
let contactLink = document.createElement('a')
let contactNode = document.createTextNode('Contact')
let heroImage = document.createElement('img')
let section = document.createElement('section')
let divElement1 = document.createElement('div')
let divElement2 = document.createElement('div')
let divElement3 = document.createElement('div')
let image1 = document.createElement('img')
let image2 = document.createElement('img')
let image3 = document.createElement('img')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let footer = document.createElement('footer')
let copyright = document.createElement('p')

// Style
root.style.cssText = 'margin: 0; padding: 0; font-family: sans-serif;'
body.style.cssText = 'background: #ffffff; margin: 0; padding: 0;'
container.style.cssText = 'width: 80%; min-height: 100vh; margin: auto; background: #F3F5F4; box-shadow: 0px 0px 95px #999;'
navigation.style.cssText = 'background: #F3F5F4; height: 50px; margin: auto;'
ul.style.cssText = 'background: #F3F5F4; width: 80%; margin: auto; list-style-type: none; display: flex; justify-content: space-around; line-height: 50px;'
aboutLink.style.cssText = 'color: #333333; text-decoration: none;'
homeLink.style.cssText = 'color: #333333; text-decoration: none;'
contactLink.style.cssText = 'color: #333333; text-decoration: none;'
heroImage.style.cssText = 'width: 100%'
section.style.cssText = 'display: flex; justify-content: space-between; width: 90%; margin: auto; padding: 120px 0;'
divElement1.style.cssText = 'width: 300rem; text-align: center; color: #333333;'
divElement2.style.cssText = 'width: 300rem; text-align: center; color: #333333;'
divElement3.style.cssText = 'width: 300rem; text-align: center; color: #333333;'
image1.style.cssText = 'width: 80%; height: 200px; object-fit: cover; display: block; margin: auto; box-shadow: 2px 2px 20px #969696; border-radius: 5px;'
image2.style.cssText = 'width: 80%; height: 200px; object-fit: cover; display: block; margin: auto; box-shadow: 2px 2px 20px #969696; border-radius: 5px;'
image3.style.cssText = 'width: 80%; height: 200px; object-fit: cover; display: block; margin: auto; box-shadow: 2px 2px 20px #969696; border-radius: 5px;'
p1.style.cssText = 'font-family: Roboto Mono, monospace; font-size: 15px; text-align: justify; line-height: 25px; padding: 10px 30px 0 30px;'
p2.style.cssText = 'font-family: Roboto Mono, monospace; font-size: 15px; text-align: justify; line-height: 25px; padding: 10px 30px 0 30px;'
p3.style.cssText = 'font-family: Roboto Mono, monospace; font-size: 15px; text-align: justify; line-height: 25px; padding: 10px 30px 0 30px;'
footer.style.cssText = 'background: #333333; width: 80%; height: 100px; margin: auto; line-height: 100px'
copyright.style.cssText = 'font-family: Roboto Mono, monospace; margin: 0; color: #ffffff; text-align: center;'

// ID/classes
container.id = 'container'
ul.id = 'navbar'
homeLink.href = '/'
aboutLink.href = '/'
contactLink.href = '/'
heroImage.src = 'img/camera.jpg'
section.id = 'photos'
divElement1.className = 'photo'
divElement2.className = 'photo'
divElement3.className = 'photo'
image1.src= 'img/photo1.jpg'
image2.src= 'img/photo2.jpg'
image3.src= 'img/photo3.jpg'

// HTML text
p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim sapien ac ultrices semper. Mauris eget efficitur elit, nec maximus enim.'
p2.innerHTML = 'Donec condimentum libero sed justo sodales venenatis. Ut auctor dui ipsum, vitae rhoncus nisl efficitur a. Quisque malesuada, lorem sed eleifend aliquam, libero erat venenatis metus, id sagittis sapien ante eget nunc.'
p3.innerHTML = 'Pellentesque luctus leo et interdum pulvinar. Integer fringilla gravida sem, vitae suscipit ipsum cursus sit amet. Proin nec ante facilisis, pretium diam a, luctus arcu.'
copyright.innerHTML = 'Copyright © 2020 All Rights Reserved'

// Append
body.appendChild(container)
body.appendChild(footer)
container.appendChild(navigation)
navigation.appendChild(ul)
homeLink.appendChild(homeNode)
ul.appendChild(home)
aboutLink.appendChild(aboutNode)
ul.appendChild(about)
contactLink.appendChild(contactNode)
ul.appendChild(contact)
home.appendChild(homeLink)
about.appendChild(aboutLink)
contact.appendChild(contactLink)
container.appendChild(heroImage)
container.appendChild(section)
section.appendChild(divElement1)
section.appendChild(divElement2)
section.appendChild(divElement3)
divElement1.appendChild(image1)
divElement2.appendChild(image2)
divElement3.appendChild(image3)
divElement1.appendChild(p1)
divElement2.appendChild(p2)
divElement3.appendChild(p3)
footer.appendChild(copyright)