#import <UIKit/UIKit.h>

@class WrapperViewController;

@interface WrapperAppDelegate : NSObject <UIApplicationDelegate>
{
	UIWindow				*window;
	WrapperViewController	*viewController;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) IBOutlet WrapperViewController *viewController;

@end

