$(function()
{
    var form_obj = $('form#contact').on('submit', function(e)
    {
        if (grecaptcha.getResponse().length == 0) return false;
        e.preventDefault();

        var sender_name  = $("input[name='name']").val();
        var sender_email = $("input[name='email']").val();
        var message      = $("textarea").val();
        var subject      = $("select[name='_subject']").val();
        var send_copy    = document.getElementsByName('_cc')[0];

        $.ajax({
            url   : 'https://formspree.io/' + 'fymfifa' + '@' + 'gmail' + '.' + 'com',
            method: 'POST',
            data  :
            {
                name    : sender_name,
                email   : sender_email,
                message : message,
                _subject: subject,
                _cc     : send_copy.checked ? sender_email : null
            },
            dataType: "json",
            beforeSend: function()
            {
                var submit_obj = $("input[type='submit']").prop('disabled', 'disabled');
                submit_obj.val("Sending message...");
            },
            success : function()
            {
                var status_obj = $("#sent_status").html
                    ("<p>Message successfully sent. Expect a reply within 48 hours.</p>");
                status_obj.show();
                form_obj  .hide();
            },
            error: function(err)
            {
                var status_obj = $("#sent_status").html
                    ("<p>Error: " + err + ". Message not sent!</p>");
                status_obj.show();
                form_obj  .hide();
            }
        });
    });
});
