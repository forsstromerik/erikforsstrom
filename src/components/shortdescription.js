import React, { Component } from 'react';

const styles = {
  padding: '40px 12%',
  top: '700px',
  position: 'absolute',
  lineHeight: '1.4rem'

}

class ShortDescription extends Component {
  state = {

  }

  render() {
    return (
      <div className="short-description" style={styles}>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies metus placerat nisi fermentum, in consectetur ex aliquam. Sed id quam risus. Donec pellentesque, leo eu pretium malesuada, eros ex feugiat enim, eget rutrum sem odio ut orci. Nulla euismod justo neque, ac rhoncus ligula imperdiet a. In hac habitasse platea dictumst. Nullam sodales, libero nec tempor ultricies, nisl nulla hendrerit mi, scelerisque egestas lectus urna quis ante. Fusce quis tortor iaculis, gravida tortor ac, fringilla orci. Suspendisse lobortis volutpat lectus sed volutpat. Aenean finibus nec purus sit amet pretium. Praesent id leo libero. Donec eu posuere quam, sit amet vulputate tellus. Curabitur vitae quam a risus efficitur laoreet.
        </p>
        <p>
        Aenean maximus velit a orci porta aliquam. Suspendisse sed varius enim, in scelerisque purus. Sed laoreet in orci eu fringilla. Aenean quis justo tempor arcu lobortis molestie in quis nunc. Vivamus nec ex a odio volutpat auctor consectetur vel lorem. Vestibulum eleifend est at eros aliquet, at viverra ex dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc et purus ante. Proin auctor nunc magna, sed vehicula leo aliquet eu. Fusce ut euismod dolor. Pellentesque tristique tortor eu nulla porttitor, sit amet feugiat diam facilisis. In enim velit, varius et tempus eget, posuere eu sapien.
        </p>
      </div>
    );
  }
}

export default ShortDescription;