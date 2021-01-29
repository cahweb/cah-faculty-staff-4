<?php

global $post, $wp_query;

// On the 404 replacement pages, the theme doesn't add the title properly for some reason,
// so we'll handle it ourselves.
$add_title = false;

if( is_object( $post ) && is_404() )
{
    $add_title = true;

    add_filter( 'pre_get_document_title', function( $title ) {

        global $post;

        if( 'faculty-staff' === $post->post_name && stripos( $title, 'Faculty &amp; Staff' ) === false ) {
            return 'Faculty &amp; Staff &ndash; ' . get_bloginfo( 'name', 'display' );
        }

        return $title;
    });

    $wp_query->queried_object = $post;
    $wp_query->is_404 = false;
    $wp_query->is_page = true;

    set_query_var( 'ucfwp_obj', $post );
}

get_header();
?>

<?php if( $add_title ) : ?>
<div class="container">
    <h1 class="h1 d-block mt-3 mt-sm-4 mt-md-5 mb-2 mb-md-3">Faculty &amp; Staff</h1>
</div>
<?php endif; ?>

<div class="mt-5 mb-4" style="min-height: 240px;">
    <?= apply_filters( 'the_content', $post->post_content ); ?>
</div>

<?php
get_footer();

wp_reset_postdata();
?>