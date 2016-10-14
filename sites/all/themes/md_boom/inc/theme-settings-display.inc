<?php

/**
 * @file
 * Theme settings .
 */

function md_boom_theme_settings_display(&$form, &$form_state) {
    $form['md_boom_settings']['display'] = array(
        '#type' 					=> 'fieldset',
        '#weight' 				=> -1,
        '#prefix'  				=> '<div id="md-display" class="md-tabcontent clearfix">',
        '#suffix'        => '</div><!-- / #md-display -->',
    );

    $form['md_boom_settings']['display']['display_htmllist'] = array(
        '#markup' 				=> '<div class="md-listleft">
				<ul>
					<li><a href="#s-contact">Contact</a></li>
					<li><a href="#s-social">Social Media Promotion</a></li>
					<li><a href="#s-footer">Footer</a></li>
					<li><a href="#s-map">Map</a></li>
				</ul>
			</div><div class="md-listcontent">',
        '#weight' 				=> -15,
    );

    $form['md_boom_settings']['display']['display_htmllistclose'] = array(
        '#markup' 				=> '</div><!-- /.md-listleft -->',
        '#weight' 				=> 15,
    );

    /*---------------- Contact Detail ----------------------*/

    $email = theme_get_setting('sites_email','md_boom');
    $address = theme_get_setting('address','md_boom');
    $phone = theme_get_setting('phone','md_boom');
    $fax = theme_get_setting('fax','md_boom');
    $description = theme_get_setting('sites_description','md_boom');
    $form['md_boom_settings']['display']['contact']['detail'] = array(
        '#type' 					=> 'fieldset',
        '#weight' 				=> -6,
        '#prefix'  				=> '<div id="s-contact" class="md-tabcontent clearfix">',
        '#suffix'        => '</div><!-- / #contact -->',
    );
    $form['md_boom_settings']['display']['contact']['detail']['webform_title'] = array(
        '#type' => 'textfield',
        '#title'    => 'Webform Title',
        '#default_value'    => theme_get_setting('webform_title','md_boom')
    );
    $form['md_boom_settings']['display']['contact']['detail']['webform_des'] = array(
        '#type' => 'textfield',
        '#title'    => 'Webform Description',
        '#default_value'    => theme_get_setting('webform_des','md_boom')
    );
    $form['md_boom_settings']['display']['contact']['detail']['sites_email'] = array(
        '#type' 					=> 'textfield',
        '#title'					=> t('Sites Email'),
        '#default_value' 	=>      $email ? $email : t('contact@megadrupal.com'),
        '#prefix'					=> '<h3>' . t('Contact Detail') . '</h3>',
    );
    $form['md_boom_settings']['display']['contact']['detail']['address'] = array(
        '#type' 					=> 'textarea',
        '#resizable'    => false,
        '#title'					=> t('Address'),
        '#default_value' 	=>  $address ? $address : t('Ha Noi, Viet Nam'),

    );
    $form['md_boom_settings']['display']['contact']['detail']['phone'] = array(
        '#type' 					=> 'textfield',
        '#title'					=> t('Phone'),
        '#default_value' 	=>  $phone ? $phone : t('+84 123 456 789'),

    );
    $form['md_boom_settings']['display']['contact']['detail']['fax'] = array(
        '#type' 					=> 'textfield',
        '#title'					=> t('Fax'),
        '#default_value' 	=>  $fax ? $fax : t('+84 012 345 6789'),

    );
    $form['md_boom_settings']['display']['contact']['detail']['sites_description'] = array(
        '#type' 					=> 'textarea',
        '#resizable'    => false,
        '#title'					=> t('Sites Description'),
        '#default_value' 	=>  $description ? $description : t('<h5>Say Hello !</h5>
<p>To find out more about what we can do for you, request some more examples of our work, or arrange a meeting, please dont hesitate to get in touch.</p>'),

    );
    /* 2.	Social Media Promotion
 --------------------------------------------------------------------------*/
    $form['md_boom_settings']['display']['social_media'] = array(
        '#type'         => 'fieldset',
        '#prefix'  				=> '<div id="s-social" class="md-tabcontent clearfix">',
        '#suffix'        => '</div><!-- / #social-media -->',
    );
    $form['md_boom_settings']['display']['social_media']['enable_socials'] = array(
        '#type'=> 'checkbox',
        '#title'    => 'Enable Socials Block',
        '#default_value'    => theme_get_setting('enable_socials','md_boom')
    );
    $form['md_boom_settings']['display']['social_media']['social_media_openhtml'] = array(
        '#markup'   => '<div id="social-media-wrapper">'
    );
    // Get tweet
    $form['md_boom_settings']['display']['social_media']['twitter_account'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'Twitter page url',
        '#description'   	=> t('Enter your twitter page url here, e.g http://twitter.com/yourusername
			                          </br>Configure twitter block '.l('here','admin/structure/block/manage/md_boom/twitter/configure').'
			                        '),
        '#default_value' 	=> theme_get_setting('twitter_account','md_boom') ? theme_get_setting('twitter_account','md_boom') : '',
        '#prefix'         => '<h3>'.t('Twitter').'</h3>',
    );

    $form['md_boom_settings']['display']['social_media']['facebook_account'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'Facebook page url',
        '#description'   	=> t('Enter your facebook user name here, e.g http://facebook.com/yourusername'),
        '#default_value' 	=> theme_get_setting('facebook_account','md_boom') ? theme_get_setting('facebook_account','md_boom') : '',
        '#prefix'         => '<h3>'.t('Facebook').'</h3>',
    );

    /*
        $form['md_boom_settings']['display']['social_media']['skype_account'] = array(
            '#type'         	=> 'textfield',
            '#title'					=> 'Skype page url',
            '#description'   	=> t('Enter your skype page url here, e.g: http://skype.com/yourusername'),
            '#default_value' 	=> theme_get_setting('skype_account','md_boom') ? theme_get_setting('skype_account','md_boom') : '',
            '#prefix'         => '<h3>'.t('Skype').'</h3>',
        );*/
    $form['md_boom_settings']['display']['social_media']['youtube_channel'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'Youtube channel url',
        '#description'   	=> t('Enter your Youtube channel url here, e.g: http://youtube.com/youryoutubechannel'),
        '#default_value' 	=> theme_get_setting('youtube_channel','md_boom') ? theme_get_setting('youtube_channel','md_boom') : '',
        '#prefix'         => '<h3>'.t('Youtube').'</h3>',
    );
    $form['md_boom_settings']['display']['social_media']['google+_account'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'Google+ page url',
        '#description'   	=> t('Enter your google+ page url here, e.g: http://plus.google.com/yourusername'),
        '#default_value' 	=> theme_get_setting('google+_account','md_boom') ? theme_get_setting('google+_account','md_boom') : '',
        '#prefix'         => '<h3>'.t('Google').'</h3>',
    );

    /*$form['md_boom_settings']['display']['social_media']['dribbble_account'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'Dribbble page url',
        '#description'   	=> t('Enter your dribbble page url here, e.g http://dribbble.com/yourusername'),
        '#default_value' 	=> theme_get_setting('dribbble_account','md_boom') ? theme_get_setting('dribbble_account','md_boom') : '',
        '#prefix'         => '<h3>'.t('Dribbble').'</h3>',
    );*/
    $form['md_boom_settings']['display']['social_media']['pinterest_account'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'Pinterest page url',
        '#description'   	=> t('Enter your pinterest page url here, e.g http://pinterest.com/yourusername'),
        '#default_value' 	=> theme_get_setting('pinterest_account','md_boom') ? theme_get_setting('pinterest_account','md_boom') : '',
        '#prefix'         => '<h3>'.t('Pinterest').'</h3>',
    );
    $form['md_boom_settings']['display']['social_media']['linkedin_account'] = array(
        '#type'         	=> 'textfield',
        '#title'					=> 'LinkedIn page url',
        '#description'   	=> t('Enter your LinkedIn page url here, e.g http://linkedin.com/yourusername'),
        '#default_value' 	=> theme_get_setting('linkedin_account','md_boom') ? theme_get_setting('linkedin_account','md_boom') : '',
        '#prefix'         => '<h3>'.t('LinkedIn').'</h3>',
    );
    $form['md_boom_settings']['display']['social_media']['social_media_closehtml'] = array(
        '#markup'   => '</div>'
    );
    $form['md_boom_settings']['display']['footer'] = array(
        '#type'             => 'fieldset',
        '#weight' 				=> -7,
        '#prefix'  				=> '<div id="s-footer" class="md-tabcontent clearfix">',
        '#suffix'        => '</div><!-- / #footer -->',
    );
    $form['md_boom_settings']['display']['footer']['footer_text'] = array(
        '#type' 					=> 'textarea',
        '#resizable'    => false,
        '#title'					=> t('Footer Text'),
        '#default_value' 	        =>  theme_get_setting('footer_text','md_boom') ? theme_get_setting('footer_text','md_boom') : '<p id="copyright">
                                        <strong>MD Boom - Designed by Felixplus</strong>
                                        - Drupal theme by
                                        <a href="http://megadrupal.com">MegaDrupal</a>
                                        </p>
                                        <p>All stock photos used on this Boom demo site are only for demo purposes and not included in the template package.</p>',
        '#prefix'					=> '<h3>' . t('Footer Detail') . '</h3>',
    );
    $form['md_boom_settings']['display']['map'] = array(
        '#type'             => 'fieldset',
        '#weight' 				=> -8,
        '#prefix'  				=> '<div id="s-map" class="md-tabcontent clearfix">',
        '#suffix'        => '</div><!-- / #footer -->',
    );
    $form['md_boom_settings']['display']['map']['map_latlng'] = array(
        '#type' 					=> 'textfield',
        '#title'					=> t('Google Map location'),
        '#default_value' 	        =>  theme_get_setting('map_latlng','md_boom') ? theme_get_setting('map_latlng','md_boom') : t('40.748395,-73.985542'),
        '#description'              =>  t('Find your map point by reading our documentation'),
    );
    $form['md_boom_settings']['display']['map']['map_types']   = array(
        '#type'         => 'select',
        '#title'        => t('Map types'),
        '#options'      => array(
            'ROADMAP'  => t('Road Map'),
            'SATELINE' => t('Sate Line'),
            'HYBRID'    => t('Hybrid'),
            'TERRAIN'   => t('Terrain'),
        ),
        '#default_value'    => theme_get_setting('map_types','md_boom') ? theme_get_setting('map_types','md_boom') : t('ROADMAP'),
    );
    $form['md_boom_settings']['display']['map']['map_zoom_level'] = array(
        '#type'         => 'textfield',
        '#title'        => t(' Map Zoom Level'),
        '#default_value'    => theme_get_setting('map_zoom_level','md_boom') ? theme_get_setting('map_zoom_level','md_boom') : 16,
    );
}