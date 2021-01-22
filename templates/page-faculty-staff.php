<?php

global $post, $wp_query;

if( is_object( $post ) && is_404() )
{
    add_filter( 'pre_get_document_title', function( $title ) {
        return 'Faculty &amp; Staff &ndash; ' . get_bloginfo( 'name', 'display' );
    });

    $wp_query->queried_object = $post;
    $wp_query->is_404 = false;
    $wp_query->is_page = true;
}

get_header();
?>

<div class="mt-5 mb-4" style="min-height: 240px;">
    <?= apply_filters( 'the_content', $post->post_content ); ?>
</div>

<?php
get_footer();

wp_reset_postdata();
?>