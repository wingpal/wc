<?php
/**
 * View preprocess
 */
function md_boom_preprocess_views_view(&$vars) {
    $views = $vars['view'];
    if($views->disabled !== true){
        if($views->name == 'overview'){
            $view = (array)$views;
            $vars['view_name'] = $view['name'];
            $vars['view_human_name'] = $view['human_name'];
            $vars['view_description'] = $view['description'];

            $view_result = (object)$view['result'];
            $vars['view_result'] = $view_result;
        }
        if($views->name == 'our_team'){
            $view = (array)$views;
            $vars['view_name'] = $view['name'];
            $vars['view_human_name'] = $view['human_name'];
            $vars['view_description'] = $view['description'];
            $result = (object)$view['result'];
        }
        if($views->name == 'service'){
            $view = (array)$views;
            $vars['view_name'] = $view['name'];
            $vars['view_human_name'] = $view['human_name'];
            $vars['view_description'] = $view['description'];
            $result = (object)$view['result'];
        }
        if($views->name == 'portfolio'){
            $view = (array)$views;
            $vars['view_name'] = $view['name'];
            $vars['view_human_name'] = $view['human_name'];
            $vars['view_description'] = $view['description'];
            $view_result = (object)$view['result'];
            $taxo = taxonomy_vocabulary_machine_name_load('portfolio_category');
            $terms = taxonomy_get_tree($taxo->vid);
            $vars['taxonomy_list_terms'] = $terms;
        }
        if($views->name == 'blog'){
            $view = (array)$views;
            $vars['view_name'] = $view['name'];
            $vars['view_human_name'] = $view['human_name'];
            $vars['view_description'] = $view['description'];
            $result = (object)$view['result'];
        }
        if($views->name == 'contact'){
            $view = (array)$views;
            //var_dump($view);die;
            $vars['view_name'] = $view['name'];
            $vars['view_human_name'] = $view['human_name'];
            $vars['view_description'] = $view['description'];
            $result = $view['result'];

            $vars['content_type_name'] = $view['type'];
            if(isset($result[0])) {
                $nid = $result[0]->nid;
                $node_object = node_load($nid);
                $webform = $node_object->webform;
                $components = $webform['components'];
                $field_webform_body = $view['field']['webform_form_body']->last_render;
                $vars['webform_content'] = $field_webform_body;
            }

        }
    }

}
