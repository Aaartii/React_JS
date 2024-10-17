import React, { useMemo } from 'react';  // Import React and useMemo hook
import './grid.css';  // Import the stylesheet for grid styling
import Column from '../Column/Column';  // Import the Column component to display each group of tickets
import { Ticket, User } from '../../interfaces';  // Import types for Ticket and User for proper typing

// Define the Grid component which organizes tickets into columns based on the grouping
function Grid({ gridData, grouping, userIdToData }: { gridData: Record<string, Ticket[]>, grouping: string, userIdToData: Record<string, User> }) {

    // Extract keys from gridData object using useMemo to optimize performance (avoids recalculating on every render)
    const keys: string[] = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>  {/* Main grid container */}
            {/* Loop through each key in gridData and render a Column component for each key */}
            {keys.map((key: string) => (
                <Column 
                    key={key}  // Set the unique key for each column
                    tickets={gridData[key]}  // Pass tickets grouped by the current key
                    grouping={grouping}  // Pass the grouping type (status, priority, or user)
                    groupBy={key}  // Pass the current key used for grouping
                    userIdToData={userIdToData}  // Provide user data mapping for the tickets
                />
            ))}
        </div>
    );
}

export default Grid;
