<?php
/**
 * Generic page fallback (pages without a dedicated template).
 *
 * @package azusa
 */
get_header();
while ( have_posts() ) :
	the_post();
	?>
	<section style="background:linear-gradient(150deg,#0B1A33,#0E1F3D);padding:clamp(150px,17vw,210px) 0 clamp(56px,7vw,90px);position:relative;overflow:hidden;">
		<div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
			<div data-reveal style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(40px,7vw,90px);line-height:1.05;color:#F7F6F2;">PAGE</div>
			<div data-reveal data-reveal-delay="150" style="display:flex;align-items:center;gap:16px;margin-top:16px;">
				<span style="width:40px;height:1px;background:#C9A86A;"></span>
				<span style="font-size:14px;letter-spacing:0.22em;color:rgba(255,255,255,0.72);"><?php the_title(); ?></span>
			</div>
		</div>
	</section>
	<section style="background:#F7F6F2;padding:clamp(70px,9vw,120px) 0;">
		<div style="max-width:880px;margin:0 auto;padding:0 clamp(20px,4vw,48px);font-size:15px;line-height:2.2;letter-spacing:0.04em;color:#3A4458;">
			<?php the_content(); ?>
		</div>
	</section>
	<?php
endwhile;
get_footer();
