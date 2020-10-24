use Tk;

# Template
my $mw = new MainWindow();
my $label = $mw->Label( -text=>"Enter some text")->pack();
MainLoop;

## Hello World
my $mw = new MainWindow;
my $label = $mw->Label( -text=>"Hello World" )->pack();
#my $button = $mw->Button( -text=>"Quit", -command=>sub{ exit } )->pack();
my $button = $mw->Button( -text=>"Quit", -command=>\&exitProgram )->pack();
MainLoop;

sub exitProgram
{
    $mw->messageBox( -message=>"Goodbye" );
    exit;
}

# Button
my $mw = new MainWindow;
my $button = $mw->Button( -text=>"Close", -command=>\&buttonClick )->pack();
MainLoop;

sub buttonClick
{
    $mw->messageBox( -message=>"Are you sure?" );
    exit;
}

# Entry, Label, Text
my $mw = new MainWindow();
my $var = "";
my $label = $mw->Label( -text=>"Enter some text")->pack();
my $entry = $mw->Entry( -textvariable=>\$var )->pack();
my $button = $mw->Button( -text=>"OK", -command=>\&buttonClicked )->pack();
my $text = $mw->Text()->pack();
MainLoop;

sub buttonClicked
{
    print "You have entered: $var\n";
}

# Frame
my $mw = new MainWindow();
my $frame = $mw->Frame( -background=>"white" )->pack();
my $label = $frame->Label( -text=>"Inside Frame" )->pack();
my $label2 = $mw->Label( -text=>"Outside Frame" )->pack();
MainLoop;

# Misc
my $mw = new MainWindow;
#$mw->geometry( "400x200" );
my $mf = $mw->Frame( -background=>"red", -borderwidth=>"5" )->pack( -fill=>"x", -anchor=>"sw" );
my $label = $mf->Label( -text=>"Select Hex file")->pack( -anchor=>"sw", -side=>"left", -padx=>"10" );
my $entry = $mf->Entry()->pack( -expand=>1, -fill=>"x", -side=>"left" );
my $button = $mf->Button( -text=>"Browse", -command=>sub{exit} )->pack();
MainLoop;
