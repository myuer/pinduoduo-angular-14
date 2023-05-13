import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAvatar]'
})
export class AvatarDirective {
  @Input() 
  @HostBinding('style.width')
  @HostBinding('style.height')
  avatarSize = '1.5rem';

  @Input() @HostBinding('style.border-radius') radius = '50%';
  @Input() @HostBinding('style.object-fit') fitMode = 'cover';

  constructor() { }

}
