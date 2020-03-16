import React from 'react';
import _ from 'lodash';

import { markdownify } from '../utils';

export default class HeroBlock extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')} className="hero">
        {_.get(this.props, 'section.title') ?
          <h2 className="hero-title">{_.get(this.props, 'section.title')}</h2>
          :
          <h2 className="hero-title">Hi, I'm {_.get(this.props, 'pageContext.site.data.author.name')}.</h2>
        }
        <div className="hero-text">
          {markdownify(_.get(this.props, 'section.content'))}
        </div>
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="XPRFA5BYMRZP2" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </section>
    );
  }
}
