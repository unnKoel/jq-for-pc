/**
 * Created by common on 2016/11/24.
 */
;(function ($) {
  $.fn.extend({
    /***
     * checkbox组
     */
    checkGroup: function () {
      var $ckLeader = this.find('.ck-leader'),
        $ckMemberList = this.find('.ck-member');

      this.groupMemberLength = $ckMemberList.length;
      this.currentCheck = 0;
      var groupThis = this;

      //总的checked
      $ckLeader.parent().on('click', function () {
        if ($ckLeader.prop('checked')) {
          $ckMemberList.each(function () {
            $(this).prop('checked', true);
          });
          groupThis.currentCheck = groupThis.groupMemberLength;
        } else {
          $ckMemberList.each(function () {
            $(this).prop('checked', false);
          });
          groupThis.currentCheck = 0;
        }
      });

      $ckMemberList.each(function () {
        var that = $(this);
        $(this).parent().on('click', function () {
          if (!that.prop('checked') && $ckLeader.prop('checked')) {
            $ckLeader.prop('checked', false);
          }
          // 全部选择
          if(that.prop('checked')) {
            groupThis.currentCheck++;
          } else {
            groupThis.currentCheck--;
          }
          if (groupThis.currentCheck == groupThis.groupMemberLength) {
            $ckLeader.prop('checked', true);
          }
        });
      });

      return this;
    }
  });
})(jQuery);