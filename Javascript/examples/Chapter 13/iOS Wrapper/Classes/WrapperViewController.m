#import "WrapperViewController.h"

@implementation WrapperViewController

- (void) viewDidLoad
{
	NSBundle *bundle   = [NSBundle mainBundle]; 
	NSString *path     = [bundle bundlePath];
	NSString *fullPath = [NSBundle pathForResource:@"index"
						 ofType:@"htm" inDirectory:path];
	
	[webView loadRequest:[NSURLRequest requestWithURL:
						 [NSURL fileURLWithPath:fullPath]]];
}

- (BOOL) shouldAutorotateToInterfaceOrientation:
  (UIInterfaceOrientation)interfaceOrientation
{
	return YES;
}

- (void) didRotateFromInterfaceOrientation:
  (UIInterfaceOrientation)fromInterfaceOrientation
{
   webView.scalesPageToFit = YES;
   webView.backgroundColor = [UIColor blackColor];
}

- (void) didReceiveMemoryWarning
{
	[super didReceiveMemoryWarning];
}

- (void) dealloc
{
	[super dealloc];
}

@end
