<?php
/*
Plugin Name: Tiktok Name Generator
Plugin URI: https://tiktokvoicegenerator.com/
Description: Generates Tiktok usernames based on first and last name input
Version: 1.0
Author: Ibex
Author URI: https://facebook.com/kaivort/
*/

// Enqueue scripts and styles
function tiktok_name_generator_scripts() {
  wp_enqueue_style( 'tiktok-name-generator-style', plugins_url( 'style.css', __FILE__ ) );
  wp_enqueue_script( 'tiktok-name-generator-script', plugins_url( 'script.js', __FILE__ ), array( 'jquery' ), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'tiktok_name_generator_scripts' );

// Output the plugin HTML
function tiktok_name_generator_shortcode() {
  ob_start();
  include( plugin_dir_path( __FILE__ ) . 'index.html' );
  return ob_get_clean();
}
add_shortcode( 'tiktok-name-generator', 'tiktok_name_generator_shortcode' );
