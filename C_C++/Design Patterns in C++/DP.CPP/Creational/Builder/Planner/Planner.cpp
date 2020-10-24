#include "Planner.hpp"



int main( int argc, char* argv[] ) {

	Client client( new VacationBuilder() );

	std::auto_ptr< Vacation > vacation( client.constructPlanner() );
	vacation->printItinerary();	

	

	return 0;
}
