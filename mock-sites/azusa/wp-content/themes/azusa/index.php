<?php
/**
 * Fallback template (blog / archive / search / 404).
 *
 * @package azusa
 */
get_header();
?>
<section style="background:linear-gradient(150deg,#0B1A33,#0E1F3D);padding:clamp(150px,17vw,210px) 0 clamp(56px,7vw,90px);position:relative;overflow:hidden;">
	<div style="position:relative;max-width:1320px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
		<div data-reveal style="font-family:'Jost',sans-serif;font-weight:200;font-size:clamp(40px,7vw,90px);line-height:1.05;color:#F7F6F2;"><?php echo is_404() ? '404' : 'NEWS'; ?></div>
		<div data-reveal data-reveal-delay="150" style="display:flex;align-items:center;gap:16px;margin-top:16px;">
			<span style="width:40px;height:1px;background:#C9A86A;"></span>
			<span style="font-size:14px;letter-spacing:0.22em;color:rgba(255,255,255,0.72);"><?php echo is_404() ? 'ページが見つかりません' : 'お知らせ'; ?></span>
		</div>
	</div>
</section>
<section style="background:#F7F6F2;padding:clamp(70px,9vw,120px) 0;">
	<div style="max-width:880px;margin:0 auto;padding:0 clamp(20px,4vw,48px);">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article style="border-top:1px solid #E4E0D5;padding:28px 4px;">
					<a class="az-more" href="<?php the_permalink(); ?>" style="text-decoration:none;color:#1B2536;">
						<span style="font-family:'Jost',sans-serif;font-size:12px;letter-spacing:0.18em;color:#C9A86A;"><?php echo esc_html( get_the_date() ); ?></span>
						<h2 style="margin:10px 0 0;font-size:20px;font-weight:500;letter-spacing:0.04em;"><?php the_title(); ?></h2>
					</a>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<p style="font-size:15px;line-height:2.2;color:#3A4458;text-align:center;">お探しのページは見つかりませんでした。<br><a class="az-more" href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color:#0E1F3D;border-bottom:1px solid #C9A86A;padding-bottom:4px;text-decoration:none;">TOPへ戻る →</a></p>
		<?php endif; ?>
	</div>
</section>
<?php
get_footer();
