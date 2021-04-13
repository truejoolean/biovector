const MailchimpNewsletter = () => {

  return (
              <>
              <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript' dangerouslySetInnerHTML={{__html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);`}}></script>
<div id="mc_embed_signup" className="flex">
  <div className="">
   <form action="https://biovector.us1.list-manage.com/subscribe/post?u=ac98e47188302a54db3dff986&amp;id=8dde31774d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
        <div className="flex">
           <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
           <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
         </div>
         <div class="mc-field-group py-2">
            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
            </label><br />
            <input type="text" name="EMAIL" id="mce-EMAIL" className="input-field"/>
         </div>
         <div class="mc-field-group py-2">
            <label for="mce-FNAME">First Name </label><br />
            <input type="text" name="FNAME" class="" id="mce-FNAME" className="input-field" />
         </div>
         <div class="mc-field-group py-2">
            <label for="mce-LNAME">Last Name </label><br />
            <input type="text" name="LNAME" class="" id="mce-LNAME" className="input-field" />
         </div>
         <div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
            <div class="content__gdpr">
               <h3 className="text-lg font-bold">Marketing permissions</h3>
               <p></p>
               <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                  <label class="checkbox subfield" for="gdpr_44862"><input type="checkbox" id="gdpr_44862" name="gdpr[44862]" class="av-checkbox gdpr" /><span>I hereby give consent for biovector to contact me via e-mail according to the privacy policy.</span> </label>
               </fieldset>
                        <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="" className="mt-4 w-full bg-blue-700 text-white rounded-lg px-4 py-4 md:py-2 md:text-xs text-xl pointer" /></div>
               <p className="text-gray-700 text-sm mt-4">You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our <a href="/privacy-policy" target="_blank"><span className="text-blue-400">privacy policy</span></a>.</p>
            </div>
            <div className="content__gdprLegal text-gray-700 text-sm">
               <p>We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank">Learn more about Mailchimp's privacy practices here.</a></p>
            </div>
         </div>
         
{/*
         <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
         </div>
         <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ac98e47188302a54db3dff986_8dde31774d" tabindex="-1" value="" /></div>
*/}




      </div>

   </form>
   </div>
   {/*<div className="h-32 w-1/2 bg-blue-300">hi</div>*/}
   
</div>
</>
  );
};
export default MailchimpNewsletter;